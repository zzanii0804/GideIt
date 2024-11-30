# pymysql 기본 사용법1
import pymysql

# 데이터 베이스에 연결한다.
# host, user, password, db에는 접속 정보 입력
connection = pymysql.connect(host = "localhost",user="test",password ='1111',db='testdb',charset='utf8')

# cursor를 생성한다. 
# cursor에 데이터 딕셔너리 옵션을 준다. (결과를 데이터 딕셔너리로 자동으로 바꿔주는 옵션)
cursor = connection.cursor(pymysql.cursors.DictCursor)

# SQL을 하나 만든다.
SQL = '''
SELECT 
    * 
FROM
    `member`
'''

# cursor를 이용해서 SQL을 실행한다.
cursor.execute(SQL)

# 모든 데이터를 가져온다.
datas = cursor.fetchall() 

# insert, update, delete의 경우 자원 닫아주기 전에 commit을 해야 DB에 작업 내용이 저장됩니다.
# connection.commit()

# 사용했던 데이터베이스 관련 자원들을 닫아준다.
cursor.close()
connection.close()

# 가져온 데이터 확인을 위한 코드
datas