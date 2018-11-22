package jvtst;

import java.util.*;

class Std {
	private int id;
	private String fname;
	private double cgpa;

	public Std(int id, String fname, double cgpa) {
		super();
		this.id = id;
		this.fname = fname;
		this.cgpa = cgpa;
	}

	public int getId() {
		return id;
	}

	public String getFname() {
		return fname;
	}

	public double getCgpa() {
		return cgpa;
	}

}

class studentComparator implements Comparator {
	@Override
	public int compare(Object o1, Object o2) {
		Std s1 = (Std) o1;
		Std s2 = (Std) o2;

		if (s1.getCgpa() < s2.getCgpa())
			return 1;
		else if (s1.getCgpa() > s2.getCgpa())
			return -1;
		else {
			if (s1.getFname().compareTo(s2.getFname()) != 0)
				return s1.getFname().compareTo(s2.getFname());
			else {
				if (s1.getId() > s2.getCgpa())
					return 1;
				else
					return -1;
			}

		}

	}
}

//Complete the code
public class JavaSort {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int testCases = Integer.parseInt(in.nextLine());

		List<Std> studentList = new ArrayList<Std>();

		while (testCases > 0) {
			int id = in.nextInt();
			String fname = in.next();
			double cgpa = in.nextDouble();

			Std st = new Std(id, fname, cgpa);
			studentList.add(st);

			testCases--;
		}
		Collections.sort(studentList, new studentComparator());
		for (Std st : studentList) {
			System.out.println(st.getFname());
		}
	}
}
