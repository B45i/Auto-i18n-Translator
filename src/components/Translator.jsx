import React from 'react';
import CodeEditor from './CodeEditor';
import EditorSettings from './EditorSettings';

const Translator = () => {
    return (
        <div className="translator">
            <CodeEditor />
            <EditorSettings />
        </div>
    );
};

export default Translator;
