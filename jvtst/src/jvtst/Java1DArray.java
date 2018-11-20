package jvtst;

import java.util.Scanner;

public class Java1DArray {

	private static boolean verf(int leap, int[] game, int a) {
		if (a + 1 > game.length) {
			return true;
		} else if (a + leap >= game.length) {
			return true;
		}
		return false;
	}

	public static boolean canWin(int leap, int[] game) {

		boolean v = false;

		if (game[0] == 1)
			return false;
		else {
			int a = 0;
			boolean f = false;

			while (!f) {

				while (a + leap < game.length && game[a + leap] != 1) {
					a += leap;
				}

				if (verf(leap, game, a)) {
					v = true;
					f = true;
					break;
				}

				int aini = a;

				while (a + 1 < game.length && game[a + 1] != 1) {
					a++;
					while (a + leap < game.length && game[a + leap] != 1) {
						a += leap;
					}
					verf(leap, game, a);
				}

				if (verf(leap, game, a)) {
					v = true;
					f = true;
					break;
				}

				a = aini;

				while (a - 1 > 0 && game[a - 1] != 1) {
					a--;
					while (a + leap < game.length && game[a + leap] != 1) {
						a += leap;
					}
					verf(leap, game, a);
				}

				if (!verf(leap, game, a)) {
					v = false;
					f = true;
					break;
				}

			}

		}

		return v;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int q = scan.nextInt();
		while (q-- > 0) {
			int n = scan.nextInt();
			int leap = scan.nextInt();

			int[] game = new int[n];
			for (int i = 0; i < n; i++) {
				game[i] = scan.nextInt();
			}

			System.out.println((canWin(leap, game)) ? "YES" : "NO");
		}
		scan.close();
	}
}
