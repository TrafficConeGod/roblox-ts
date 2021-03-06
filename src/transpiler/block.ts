import * as ts from "ts-morph";
import { transpileStatementedNode } from ".";
import { TranspilerState } from "../TranspilerState";

export function transpileBlock(state: TranspilerState, node: ts.Block) {
	if (node.getStatements().length === 0) {
		return "";
	}
	let result = "";
	const parent = node.getParentIfKind(ts.SyntaxKind.SourceFile) || node.getParentIfKind(ts.SyntaxKind.Block);
	if (parent) {
		result += state.indent + "do\n";
		state.pushIndent();
	}
	result += transpileStatementedNode(state, node);
	if (parent) {
		state.popIndent();
		result += state.indent + "end;\n";
	}
	return result;
}
