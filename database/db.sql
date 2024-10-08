CREATE TABLE board (
    post_id SERIAL PRIMARY KEY,      -- 게시물 ID (자동 증가)
    title VARCHAR(255) NOT NULL,     -- 제목
    author VARCHAR(100) NOT NULL,    -- 작성자
    content TEXT NOT NULL,           -- 내용
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- 작성 날짜
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- 수정 날짜
    view_count INT DEFAULT 0         -- 조회수
);

INSERT INTO board (title, author, content)
VALUES ('첫 번째 게시물', '홍길동', '이 게시물은 첫 번째 게시물입니다.');
