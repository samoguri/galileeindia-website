import { supabase } from "../lib/supabase";

export interface LeaderboardEntry {
  score_uuid: string;
  puzzle_id: string;
  player_name: string;
  time_taken_ms: number;
  created_at: string;
}

const RETRY_ATTEMPTS = 3;
const RETRY_DELAY_MS = 700;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function withRetry<T>(fn: () => Promise<T>, label: string): Promise<T> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= RETRY_ATTEMPTS; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      console.error(`${label} failed (attempt ${attempt}/${RETRY_ATTEMPTS}):`, err);
      if (attempt < RETRY_ATTEMPTS) {
        await delay(RETRY_DELAY_MS * attempt);
      }
    }
  }

  throw lastError;
}

export async function submitScore(
  puzzleId: string,
  playerName: string,
  timeTakenMs: number
) {
  const score_uuid = crypto.randomUUID();

  await withRetry(async () => {
    const { error } = await supabase.from("bible_puzzle_scores").insert([
      {
        score_uuid,
        puzzle_id: puzzleId,
        player_name: playerName,
        time_taken_ms: timeTakenMs,
      },
    ]);

    if (error) {
      // 23505 = unique_violation: the row already made it through on a
      // previous attempt (we only failed to receive the response), so
      // treat a retry hitting our own score_uuid as success, not failure.
      if (error.code === "23505") return;
      throw error;
    }
  }, "submitScore");

  return { score_uuid };
}

export async function fetchLeaderboard(
  puzzleId: string,
  limit = 10
): Promise<LeaderboardEntry[]> {
  return withRetry(async () => {
    const { data, error } = await supabase
      .from("bible_puzzle_scores")
      .select("score_uuid, puzzle_id, player_name, time_taken_ms, created_at")
      .eq("puzzle_id", puzzleId)
      .order("time_taken_ms", { ascending: true })
      .limit(limit);

    if (error) {
      throw error;
    }

    return data ?? [];
  }, "fetchLeaderboard");
}
