import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './RichText.css';

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    const storedData = localStorage.getItem('richTextData');
    return storedData
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(storedData)))
      : EditorState.createEmpty();
  });

  useEffect(() => {
    const rawData = convertToRaw(editorState.getCurrentContent());
    localStorage.setItem('richTextData', JSON.stringify(rawData));
  }, [editorState]);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div className='editorContainer'>
    <div className="editor">
      <h1>Rich Text Editor</h1>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
    </div>
    </div>
  );
};

export default RichTextEditor;
