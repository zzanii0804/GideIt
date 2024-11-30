import pymysql

# 데이터베이스 연결
connection = pymysql.connect(
    host="localhost",
    user="root",
    password="0804",
    database="GuideIt"
)
cursor = connection.cursor()

# 특정 테이블의 모든 row 삭제
table_name = "laptop"  # 삭제할 테이블 이름
delete_query = f"DELETE FROM {table_name}"  # SQL DELETE 쿼리
cursor.execute(delete_query)

# 변경 사항 저장
connection.commit()

print(f"All rows in table '{table_name}' have been deleted successfully.")

# 연결 종료
cursor.close()
connection.close()