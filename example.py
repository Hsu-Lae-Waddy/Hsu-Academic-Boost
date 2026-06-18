students = []

def add_student():
    name = input("Enter Name: ")
    age = input("Enter Age: ")

    student = {
        "name": name,
        "age": age
    }

    students.append(student)

    print("Student Added Successfully!")

def view_students():
    if len(students) == 0:
        print("No Students Found")
        return

    for student in students:
        print("----------------")
        print("Name:", student["name"])
        print("Age:", student["age"])

def search_student():
    name = input("Enter Student Name: ")

    for student in students:
        if student["name"].lower() == name.lower():
            print("Student Found")
            print(student)
            return

    print(student)
    print("Student Not Found")

    print(student)
def delete_student():
    name = input("Enter Student Name: ")

    for student in students:
        if student["name"].lower() == name.lower():
            students.remove(student)
            print("Student Deleted")
            return

    print("Student Not Found")

while True:

    print("\n===== STUDENT MANAGEMENT SYSTEM =====")
    print("1. Add Student")
    print("2. View Students")
    print("3. Search Student")
    print("4. Delete Student")
    print("5. Exit")

    choice = input("Choose Option: ")

    if choice == "1":
        add_student()

    elif choice == "2":
        view_students()

    elif choice == "3":
        search_student()

    elif choice == "4":
        delete_student()

    elif choice == "5":
         print("Goodbye!")
         break

    else:
         print("Invalid Choice")