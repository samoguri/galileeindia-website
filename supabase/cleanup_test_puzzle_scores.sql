-- Run this once in the Supabase SQL Editor to remove test rows created
-- while verifying the Bible Puzzle leaderboard feature.

delete from bible_puzzle_scores
where player_name ilike 'LiveTestUser%' or player_name = 'FreshCheck';
