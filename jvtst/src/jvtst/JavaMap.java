package jvtst;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

class JavaMap {
	public static void main(String[] argh) {

		Scanner in = new Scanner(System.in);
		
		Map<String, Integer> l = new HashMap<String, Integer>();

		int n = in.nextInt();
		in.nextLine();

		for (int i = 0; i < n; i++) {
			String name = in.nextLine();
			int phone = in.nextInt();
			in.nextLine();
			l.put(name, phone);
		}

		while (in.hasNext()) {
			String s = in.nextLine();
			if (l.get(s) != null) {
				System.out.println(s + "=" + l.get(s));

			} else {
				System.out.println("Not found");
			}

		}

		in.close();

	}
}
