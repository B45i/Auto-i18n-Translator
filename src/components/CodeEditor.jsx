import React from 'react';
import Editor from '@monaco-editor/react';

const defaultValue = JSON.stringify({
    key: 'Paste  here',
});
const CodeEditor = () => {
    return (
        <div className="code-editor">
            <Editor
                height="100%"
                defaultLanguage="json"
                theme="vs-dark"
                defaultValue={defaultValue}
            />
        </div>
    );
};

export default CodeEditor;
