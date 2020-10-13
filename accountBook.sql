-- -----------------------------------------------------
-- 분류 및 카테고리 초기 데이터 (초기에 한번만 사용)
-- -----------------------------------------------------

INSERT INTO classification(name) VALUES('지출');
INSERT INTO classification(name) VALUES('수입');

INSERT INTO category(name, classification_id) VALUES('쇼핑/뷰티', 1);
INSERT INTO category(name, classification_id) VALUES('식비', 1);
INSERT INTO category(name, classification_id) VALUES('생활', 1);
INSERT INTO category(name, classification_id) VALUES('카페/간식', 1);
INSERT INTO category(name, classification_id) VALUES('문화/여가', 1);
INSERT INTO category(name, classification_id) VALUES('의료/건강', 1);
INSERT INTO category(name, classification_id) VALUES('교통', 1);
INSERT INTO category(name, classification_id) VALUES('미분류', 1);

INSERT INTO category(name, classification_id) VALUES('월급', 2);
INSERT INTO category(name, classification_id) VALUES('용돈', 2);
INSERT INTO category(name, classification_id) VALUES('기타수입', 2);