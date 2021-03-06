export = () => {
	it("should support bitwise operations", () => {
		const a = 0b101;
		const b = 0b110;
		expect(a | b).to.equal(0b111);
		expect(a & b).to.equal(0b100);
		expect(a ^ b).to.equal(0b011);
		expect(a << 1).to.equal(0b1010);
		expect(a >> 1).to.equal(0b10);
		expect(a | 0).to.equal(0b101);
	});

	it("should support bitwise assignment", () => {
		let a = 0b101;
		a |= 0b110;
		expect(a).to.equal(0b111);

		let b = 0b101;
		b &= 0b110;
		expect(b).to.equal(0b100);

		let c = 0b101;
		c ^= 0b110;
		expect(c).to.equal(0b011);

		let d = 0b101;
		d <<= 1;
		expect(d).to.equal(0b1010);

		let e = 0b101;
		e >>= 1;
		expect(e).to.equal(0b10);
	});

	it("should support bitwise assignment expressions", () => {
		let a = 0b101;
		expect((a |= 0b110)).to.equal(0b111);

		let b = 0b101;
		expect((b &= 0b110)).to.equal(0b100);

		let c = 0b101;
		expect((c ^= 0b110)).to.equal(0b011);

		let d = 0b101;
		expect((d <<= 1)).to.equal(0b1010);

		let e = 0b101;
		expect((e >>= 1)).to.equal(0b10);
	});
};
