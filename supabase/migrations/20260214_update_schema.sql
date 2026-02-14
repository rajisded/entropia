-- Create table if it doesn't exist (assuming it might be new or renamed from entropia-access-emails)
CREATE TABLE IF NOT EXISTS early_access_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL
);

-- Add new columns as requested
ALTER TABLE early_access_users
ADD COLUMN IF NOT EXISTS currently_working_as VARCHAR(255),
ADD COLUMN IF NOT EXISTS country_of_residence VARCHAR(100),
ADD COLUMN IF NOT EXISTS social_link VARCHAR(500),
ADD COLUMN IF NOT EXISTS primary_expertise VARCHAR(255),
ADD COLUMN IF NOT EXISTS more_about_you TEXT;

-- Add constraints
-- Note: We use ALTER COLUMN ... SET NOT NULL only if we are sure existing rows won't violate it.
-- Since this is "early access", we assume fresh data or compatible data.
ALTER TABLE early_access_users
ALTER COLUMN currently_working_as SET NOT NULL,
ALTER COLUMN country_of_residence SET NOT NULL,
ALTER COLUMN primary_expertise SET NOT NULL;

-- Add check constraint for social_link
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'social_link_url_check') THEN
        ALTER TABLE early_access_users
        ADD CONSTRAINT social_link_url_check 
        CHECK (social_link IS NULL OR social_link = '' OR social_link ~ '^https?://');
    END IF;
END $$;
