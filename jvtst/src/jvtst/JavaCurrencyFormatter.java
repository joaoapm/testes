package jvtst;

import java.util.*;
import java.text.*;

public class JavaCurrencyFormatter {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		scanner.useLocale(Locale.US);
		double payment = scanner.nextDouble();
		scanner.close();

		NumberFormat df = NumberFormat.getCurrencyInstance();
		DecimalFormatSymbols dfs = new DecimalFormatSymbols();
		dfs.setCurrencySymbol("Rs.");
		dfs.setGroupingSeparator(',');
		dfs.setMonetaryDecimalSeparator('.');
		((DecimalFormat) df).setDecimalFormatSymbols(dfs);

		System.out.println("US: " + NumberFormat
				.getCurrencyInstance(new Locale(Locale.US.getLanguage(), Locale.US.getCountry())).format(payment));

		System.out.println("India: " + df.format(payment));

		System.out.println("China: " + NumberFormat
				.getCurrencyInstance(
						new Locale(Locale.SIMPLIFIED_CHINESE.getLanguage(), Locale.SIMPLIFIED_CHINESE.getCountry()))
				.format(payment));

		System.out.println("France: "
				+ NumberFormat.getCurrencyInstance(new Locale(Locale.FRANCE.getLanguage(), Locale.FRANCE.getCountry()))
						.format(payment));
	}
}
