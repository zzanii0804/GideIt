import pymysql

# 데이터베이스 연결
conn = pymysql.connect(host='localhost', user='root', password='0804', database='GuideIt')
cursor = conn.cursor()

# 데이터 삽입
query = "INSERT INTO laptop (MODELNAME, NAME, MAKER, PRICE, SIZE, PERFORMANCE, DISPLAY, STORAGE, PORTABILITY, USABILITY) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
data = [
    ('SFG14-73-52V6', '에이서 스위프트 GO 14', 'acer', 97, 14, 81, 78, 76, 83, 86),
    ('NT940XGK-KC51G', '삼성전자 갤럭시북4 프로', 'samsung', 136, 14, 75, 91, 76, 88, 85),
    ('NT750XGJ-KH51G', '삼성전자 갤럭시북4', 'samsung', 87, 15, 68, 59, 72, 81, 80),
    ('NT960XFG-KP51G', '삼성전자 갤럭시북3 프로', 'samsung', 132, 16, 72.9, 88, 76.5, 87.4, 82.8),
    ('NT750XFG-KH39G', '삼성전자 갤럭시북3 ', 'samsung'67, 15.6, 64.1, 59.3, 76.5, 80.9, 79.7),

    ('NT750XFG-KC58S', '삼성전자 갤럭시북3', 'samsung', 78,	15.6, 67.7, 59.3, 72.9, 80.9, 79.7),
    ('NT950XEE-XL51G', '삼성전자 갤럭시북2 프로 ', 'samsung',100, 15.6, 69.5, 67.2, 72.9, 88.5, 82.6),
    ('15ABR8 82XM0038KR', '레노버 아이디어패드 Slim3', 'lenovo', 70, 15.6, 69.8, 60.1, 70.5, 75, 79.8),
    ('21CHS00A00', '레노버 씽크패드 T16 Gen1 ', 'lenovo', , , , , , , ),
    ('16IML G7 ULT5', '레노버 씽크북 16', 'lenovo', , , , , , , ),

    ('ABP 21JF0006KR', '레노버 씽크북 15 Gen5 ', 'lenovo', , , , , , , ),
    ('ABP 21JF0003KR ', '레노버 씽크북 15 Gen5 512GB SSD', 'lenovo', , , , , , , ),
    ('R4090', 'Razer Blade 16 14Gen 4K Dual', 'raser', , , , , , , ),
    ('B1MG', 'MSI 프레스티지 16 AI ', 'msi', , , , , , , ),
    ('C7M-R5', 'MSI 모던시리즈 모던 14', 'msi', , , , , , , ),

    ('16U70R-HA56K', 'LG전자 울트라PC 엣지 ', 'lg', , , , , , , ),
    ('16Z90RS-GA56K', 'LG전자 그램 스타일16 ', 'lg', , , , , , , ),
    ('16Z90SP-GA5CK', 'LG전자 2024 그램 프로16 ', 'lg', , , , , , , ),
    ('15U40R-GP50ML', 'LG전자 2023 울트라PC', 'lg', , , , , , , ),
    ('ag0024AU', 'HP 파빌리온 16', 'hp', , , , , , , ),

    ('ep1063TU', 'HP 울트론 14', 'hp', , , , , , , ),
    ('fb0078TX', 'HP 오멘 14 슬림 ', 'hp', , , , , , , ),
    ('fa0040AU', 'HP 엔비 x360 14', 'hp', , , , , , , ),
    ('A41ZFPA', 'HP Z북 Fury 16 G11 ', 'hp', , , , , , , ),
    ('fd1021TU', 'HP 15', 'hp', , , , , , , ),

    ('em0061AU', 'HP 14', 'hp', , , , , , , ),
    ('R2 WP01KR', 'DELL 에일리언웨어 x14 ', 'DELL', , , , , , , ),
    ('C214MA-BU0373', 'ASUS 크롬북 플립 ', 'ASUS', , , , , , , ),
    ('UX3405MA-PP721W', 'ASUS 젠북 14 OLED', 'ASUS', , , , , , , ),
    ('S5606MA-MX181', 'ASUS 비보북 S 16 OLED', 'ASUS', , , , , , , ) #30개

]
cursor.executemany(query, data)

# 커밋 및 종료
conn.commit()
cursor.close()
conn.close()
