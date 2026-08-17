-- Run this once in the Supabase Dashboard SQL Editor.
-- Creates the leaderboard table for the Bible Puzzle game and opens it
-- up for public submit + public read (unlike contacts/prayer_requests,
-- this leaderboard is meant to be visible to every player, not just admins).

create table if not exists bible_puzzle_scores (
  score_uuid uuid primary key,
  puzzle_id text not null,
  player_name text not null,
  time_taken_ms integer not null,
  created_at timestamptz not null default now()
);

create index if not exists bible_puzzle_scores_puzzle_time_idx
  on bible_puzzle_scores (puzzle_id, time_taken_ms);

alter table bible_puzzle_scores enable row level security;

drop policy if exists "Public can submit a puzzle score" on bible_puzzle_scores;
create policy "Public can submit a puzzle score" on bible_puzzle_scores
  for insert to anon
  with check (true);

drop policy if exists "Public can view the leaderboard" on bible_puzzle_scores;
create policy "Public can view the leaderboard" on bible_puzzle_scores
  for select to anon
  using (true);
