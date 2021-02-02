all: main.js

main.js: main.ts moduleA.ts moduleB.ts
	@tsc $<

run: main.js
	@node $<

clean:
	rm -f *.js

