"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ImageExtension from "@tiptap/extension-image";
import LinkExtension from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { useCallback, useState } from "react";
import { 
  Bold, Italic, Strikethrough, Heading2, Heading3, 
  List, ListOrdered, Quote, Undo, Redo, Image as ImageIcon, Link as LinkIcon
} from "lucide-react";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const [isUploading, setIsUploading] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      ImageExtension.configure({
        inline: true,
        allowBase64: true,
      }),
      LinkExtension.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: "Write your amazing blog post here...",
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose prose-lg max-w-none focus:outline-none min-h-[400px] px-6 py-6",
      },
    },
  });

  const addImage = useCallback(async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png, image/jpeg, image/webp";
    
    input.onchange = async () => {
      if (input.files?.length) {
        const file = input.files[0];
        setIsUploading(true);
        
        try {
          const formData = new FormData();
          formData.append("file", file);
          
          const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });
          
          const data = await res.json();
          
          if (data.url && editor) {
            editor.chain().focus().setImage({ src: data.url }).run();
          }
        } catch (error) {
          console.error("Failed to upload image", error);
        } finally {
          setIsUploading(false);
        }
      }
    };
    
    input.click();
  }, [editor]);

  const setLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);
    
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
      {/* Toolbar */}
      <div className="bg-gray-50 border-b border-gray-200 p-2 flex flex-wrap gap-1 items-center sticky top-0 z-10">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive("bold") ? "bg-gray-200 text-primary" : "text-gray-600"}`}
          type="button" title="Bold"
        >
          <Bold size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive("italic") ? "bg-gray-200 text-primary" : "text-gray-600"}`}
          type="button" title="Italic"
        >
          <Italic size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive("strike") ? "bg-gray-200 text-primary" : "text-gray-600"}`}
          type="button" title="Strikethrough"
        >
          <Strikethrough size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive("heading", { level: 2 }) ? "bg-gray-200 text-primary" : "text-gray-600"}`}
          type="button" title="Heading 2"
        >
          <Heading2 size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive("heading", { level: 3 }) ? "bg-gray-200 text-primary" : "text-gray-600"}`}
          type="button" title="Heading 3"
        >
          <Heading3 size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive("bulletList") ? "bg-gray-200 text-primary" : "text-gray-600"}`}
          type="button" title="Bullet List"
        >
          <List size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive("orderedList") ? "bg-gray-200 text-primary" : "text-gray-600"}`}
          type="button" title="Ordered List"
        >
          <ListOrdered size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive("blockquote") ? "bg-gray-200 text-primary" : "text-gray-600"}`}
          type="button" title="Quote"
        >
          <Quote size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <button
          onClick={setLink}
          className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive("link") ? "bg-gray-200 text-primary" : "text-gray-600"}`}
          type="button" title="Add Link"
        >
          <LinkIcon size={18} />
        </button>
        <button
          onClick={addImage}
          disabled={isUploading}
          className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-600 disabled:opacity-50"
          type="button" title="Add Image"
        >
          {isUploading ? <span className="text-xs font-bold px-1">...</span> : <ImageIcon size={18} />}
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1 ml-auto" />

        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-600 disabled:opacity-50"
          type="button" title="Undo"
        >
          <Undo size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-600 disabled:opacity-50"
          type="button" title="Redo"
        >
          <Redo size={18} />
        </button>
      </div>

      {/* Editor Content Area */}
      <EditorContent editor={editor} />
    </div>
  );
}
