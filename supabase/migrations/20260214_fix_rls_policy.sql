-- Enable RLS on the table if not already enabled
ALTER TABLE early_access_users ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists to avoid conflicts
DROP POLICY IF EXISTS "Allow public users to insert" ON early_access_users;

-- Create policy to allow anyone to insert rows
CREATE POLICY "Allow public users to insert"
ON early_access_users
FOR INSERT
TO public
WITH CHECK (true);

-- Optionally, allow the service role (backend) to do everything, but usually the service role bypasses RLS anyway.
