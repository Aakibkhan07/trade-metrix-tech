-- Create tables for OTP Authentication and Session Tracking

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  mobile_number VARCHAR(20) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  email VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- OTP Verifications table
CREATE TABLE IF NOT EXISTS otp_verifications (
  id SERIAL PRIMARY KEY,
  mobile_number VARCHAR(20) NOT NULL,
  otp_code VARCHAR(6) NOT NULL,
  is_verified BOOLEAN DEFAULT FALSE,
  attempts INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP NOT NULL,
  verified_at TIMESTAMP,
  FOREIGN KEY (mobile_number) REFERENCES users(mobile_number) ON DELETE CASCADE
);

-- User Sessions table
CREATE TABLE IF NOT EXISTS user_sessions (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  mobile_number VARCHAR(20) NOT NULL,
  session_token VARCHAR(255) UNIQUE NOT NULL,
  ip_address VARCHAR(45),
  user_agent TEXT,
  is_online BOOLEAN DEFAULT TRUE,
  last_activity TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  logged_in_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  logged_out_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Chat Messages table
CREATE TABLE IF NOT EXISTS chat_messages (
  id SERIAL PRIMARY KEY,
  user_id INT,
  mobile_number VARCHAR(20),
  message_text TEXT NOT NULL,
  sender_type VARCHAR(20) DEFAULT 'user', -- 'user' or 'ai'
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Admin tracking for all online users
CREATE TABLE IF NOT EXISTS admin_user_tracking (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  mobile_number VARCHAR(20) NOT NULL,
  full_name VARCHAR(255),
  session_id INT,
  last_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  pages_visited TEXT,
  time_spent_seconds INT DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (session_id) REFERENCES user_sessions(id) ON DELETE CASCADE
);

-- Create indexes for better query performance
CREATE INDEX idx_mobile_number ON users(mobile_number);
CREATE INDEX idx_session_token ON user_sessions(session_token);
CREATE INDEX idx_user_sessions_online ON user_sessions(is_online);
CREATE INDEX idx_otp_mobile ON otp_verifications(mobile_number);
CREATE INDEX idx_chat_user ON chat_messages(user_id);
