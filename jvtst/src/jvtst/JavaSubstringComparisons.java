package jvtst;

import java.util.Scanner;

public class JavaSubstringComparisons {

	public static String getSmallestAndLargest(String s, int k) {
		String smallest = "";
		String largest = "";

		// Complete the function
		// 'smallest' must be the lexicographically smallest substring of length 'k'
		// 'largest' must be the lexicographically largest substring of length 'k'

		for (int ki = 0; ki < k; ki++)
			for (int j = ki; j + k <= s.length(); j += k) {

				if (smallest == "" && largest == "") {
					largest = s.substring(j, j + (k));
					smallest = s.substring(j, j + (k));

				} else {
					if (largest.compareTo(s.substring(j, j + (k))) < 0)
						largest = s.substring(j, j + (k));

					if (smallest.compareTo(s.substring(j, j + (k))) > 0)
						smallest = s.substring(j, j + (k));
				}

			}

		return smallest + "\n" + largest;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String s = scan.next();
		int k = scan.nextInt();
		scan.close();

		System.out.println(getSmallestAndLargest(s, k));
	}
}