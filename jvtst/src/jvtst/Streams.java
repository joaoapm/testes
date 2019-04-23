package jvtst;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

public class Streams {
	
	public Streams() {
		List<String> items = new ArrayList<String>();
		
		items.add("um");
		items.add("um");
		items.add("três");
		
		 
		
		items.stream().forEach(pessoa  -> System.out.println(pessoa));
		
		Stream<String> teste = items.stream().filter(pessoa -> pessoa.equals("um"));
		
		System.out.print(teste.count());


	}
	
	public static void main(String[] a) {
		new Streams();
	}

	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		return super.equals(obj);
	}
}
