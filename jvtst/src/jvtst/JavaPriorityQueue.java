package jvtst;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Scanner;

class Priorities {
	public List<Student> getStudents(List<String> events) {



		Comparator<Student> comp = new Comparator<Student>() {
			@Override
			public int compare(Student s1, Student s2) {
				if (s1.getCgpa() < s2.getCgpa())
					return 1;
				else if (s1.getCgpa() > s2.getCgpa())
					return -1;
				else {
					// same cgpa
					if (!s1.getName().equals(s2.getName()))
						return s1.getName().compareTo(s2.getName());
					else {
						// same name
						return s1.getId() - s2.getId();
					}
				}
			}
		};

		PriorityQueue<Student> namePriorityQueue = new PriorityQueue<Student>(comp);
		
		List<Student> listStdFinal = new ArrayList<Student>();

		for (int i = 0; i < events.size(); i++) {
			String[] vls = events.get(i).split(" ");

			if (vls[0].equals("ENTER"))
				namePriorityQueue.add(new Student(Integer.valueOf(vls[3]), vls[1], Double.valueOf(vls[2])));
			else if (vls[0].equals("SERVED"))
				namePriorityQueue.poll();
		}

		for (Student s : namePriorityQueue)
			listStdFinal.add(s);

		Collections.sort(listStdFinal,comp);

		return listStdFinal;
	}
}

class Student {

	private int id;
	private String name;
	private double cgpa;

	public Student(int id, String name, double cgpa) {
		super();
		this.id = id;
		this.name = name;
		this.cgpa = cgpa;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getCgpa() {
		return cgpa;
	}

	public void setCgpa(double cgpa) {
		this.cgpa = cgpa;
	}

}

public class JavaPriorityQueue {
	private final static Scanner scan = new Scanner(System.in);
	private final static Priorities priorities = new Priorities();

	public static void main(String[] args) {
		int totalEvents = Integer.parseInt(scan.nextLine());
		List<String> events = new ArrayList<>();

		while (totalEvents-- != 0) {
			String event = scan.nextLine();
			events.add(event);
		}

		List<Student> students = priorities.getStudents(events);

		if (students.isEmpty()) {
			System.out.println("EMPTY");
		} else {
			for (Student st : students) {
				System.out.println(st.getName());
			}
		}
	}

}
