"use client";

import { useRef, useState } from "react";
import { FiImage, FiTrash2, FiUploadCloud } from "react-icons/fi";

type TFileUploadProps = {
    onFileSelect?: (file: File | null) => void;
};

const FileUpload = ({ onFileSelect }: TFileUploadProps) => {
 const [file, setFile] = useState<File | null>(null);
 const fileInputRef = useRef<HTMLInputElement | null>(null);
 
 const handleFileChange = (selectedFile?: File) => {
 if (!selectedFile) return;
 
 setFile(selectedFile);
 onFileSelect?.(selectedFile);
}
const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFile(null);
    onFileSelect?.(null);
}
    return (
        <div onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                e.preventDefault();
                const droppedFile = e.dataTransfer.files[0];
                handleFileChange(droppedFile);
            }}>
            <div className="m-4 py-5 border-2 border-dashed rounded-md border-primary bg-primary-light tex-center">
                <input type="file" className="hidden" ref={fileInputRef} accept="image/*" onChange={(e) => handleFileChange(e.target.files?.[0])} />
                {!file ? (
         <div className="flex flex-col items-center gap-2"> 
            <FiUploadCloud className="text-primary w-6 h-6"/>
            <p className="text-xs text-gray-600"> Upload your payment receipt here </p>
         </div> ):(
                <div className="text-center">
                    <FiImage className="text-primary mx-auto"/>
                    <p className="text-sm text-primary"> {file.name} </p>
                    <p className="text-xs text-gray-400"> {file.size} bytes </p>
                    <button onClick={removeFile} className="flex gap-2 bg-primary/90 text-white mx-auto rounded mt-4 px-3 py-1 text-xs"> 
                    <FiTrash2 className="self-center" /> Remove </button>
                </div>
            )}
            </div> 
         </div>
    );
};

export default FileUpload;