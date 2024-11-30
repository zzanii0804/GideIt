import pymysql

# 데이터베이스 연결
connection = pymysql.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="your_database"
)
cursor = connection.cursor()

# 데이터 삽입
insert_query = "INSERT INTO your_table (column1, column2) VALUES (%s, %s)"
data = ("value1", "value2")
cursor.execute(insert_query, data)
connection.commit()  # 삽입한 데이터 저장

print("Data inserted successfully.")
