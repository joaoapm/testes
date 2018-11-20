package jvtst;

import java.util.*;

class JavaStack {

	public static void main(String[] argh) {
		Scanner sc = new Scanner(System.in);

		while (sc.hasNext()) {
			String input = sc.next();

			// Complete the code
			Stack<Character> stack = new Stack<Character>();

			stack.push(input.charAt(0));

			if (input.isEmpty())
				System.out.println("true");
			else {

				for (int i = 1; i < input.length(); i++) {

					if (stack.empty() && (input.charAt(i) == '}' || input.charAt(i) == ']' || input.charAt(i) == ')')) {
						stack.push(input.charAt(i));
						break;
					}

					if (input.charAt(i) == '{' || input.charAt(i) == '[' || input.charAt(i) == '(') {
						stack.push(input.charAt(i));
					} else if (stack.peek() == '{' && input.charAt(i) == '}') {
						stack.pop();
					} else if (stack.peek() == '[' && input.charAt(i) == ']') {
						stack.pop();
					} else if (stack.peek() == '(' && input.charAt(i) == ')') {
						stack.pop();
					} else {
						break;
					}

				}
			}

			if (stack.empty())
				System.out.println("true");
			else
				System.out.println("false");
		}

		sc.close();

	}
}
