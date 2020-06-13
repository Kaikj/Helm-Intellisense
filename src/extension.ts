import * as vscode from 'vscode';
import { ValuesCompletionItemProvider } from "./ValuesCompletionItemProvider";
import { ReleaseCompletionItemProvider } from "./ReleaseCompletionItemProvider";
import { FilesCompletionItemProvider } from "./FilesCompletionItemProvider";
import { TemplateCompletionItemProvider } from "./TemplateCompletionItemProvider";
import { CapabilitiesCompletionItemProvider } from "./CapabilitiesCompletionItemProvider";
import { ChartCompletionItemProvider } from "./ChartCompletionItemProvider";

/**
 * Activates the extension. Adds completion item providers.
 */
export function activate(context: vscode.ExtensionContext): void {
	console.log('Congratulations, your extension "Helm-Intellisense" is now active!');

	for (let lang of ['yaml', 'helm']) {
		vscode.languages.registerCompletionItemProvider(lang, new ValuesCompletionItemProvider() , '.');
		vscode.languages.registerCompletionItemProvider(lang, new ReleaseCompletionItemProvider() , '.');
		vscode.languages.registerCompletionItemProvider(lang, new FilesCompletionItemProvider(), '.');
		vscode.languages.registerCompletionItemProvider(lang, new TemplateCompletionItemProvider(), '.');
		vscode.languages.registerCompletionItemProvider(lang, new CapabilitiesCompletionItemProvider(), '.');
		vscode.languages.registerCompletionItemProvider(lang, new ChartCompletionItemProvider(), '.');
	}
}

/**
 * Deactivates the extension.
 */
export function deactivate(): void {
}