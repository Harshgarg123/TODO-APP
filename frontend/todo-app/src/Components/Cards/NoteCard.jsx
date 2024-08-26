import moment from 'moment';
import React from 'react';
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      {/* Header: Title and Date */}
      <div className="flex items-center justify-between">
        <h6 className="text-sm font-medium">{title}</h6>
        <span className="text-xs text-slate-500">{moment(date).format('Do MMM YYYY')}</span>
      </div>

      {/* Pin Icon */}
      <div className="flex justify-end">
        <MdOutlinePushPin 
          className={`icon-btn cursor-pointer ${isPinned ? 'text-primary' : 'text-slate-300'}`} 
          onClick={onPinNote} 
        />
      </div>

      {/* Content Preview */}
      <p className="text-xs text-slate-600 mt-2 mb-4">
        {content?.length > 60 ? `${content.slice(0, 60)}...` : content}
      </p>

      {/* Footer: Tags and Action Icons */}
      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-500">{tags.map((item)=>`#${item}`)}</div>
        <div className="flex items-center gap-2">
          <MdCreate className="icon-btn cursor-pointer hover:text-green-600" onClick={onEdit} />
          <MdDelete className="icon-btn cursor-pointer hover:text-red-500" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
