import React from 'react';
import toast from 'react-hot-toast';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyAddCard = ({card,inx,updateDelete}) => {
    const {
        artifactName,
        artifactImage,
        artifactType,
        historicalContext,
        createdAt,discoveredAt,
        discoveredBy,presentLocation,name,email,
        like_count,
        _id
    } = card || {}
   
    return (
            <tr>
            <th className='text-[#D98855] hidden md:table-cell '> 
            {inx + 1}
          </th>
          <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                    src={artifactImage}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                    <div className="font-bold">{artifactName}</div>
                <div className="text-sm opacity-50">{artifactType}</div>
              </div>
            </div>
          </td>
          <td className='hidden md:table-cell'>
                {presentLocation.substring(0,25)}
                <br />
            <span className="badge badge-ghost badge-sm">{email}</span>
          </td>
          <td className='hidden md:table-cell'>{like_count}</td>
          <th className='flex text-2xl items-center md:gap-3'>
                <Link to={`/updateData/${_id}`} className=""><CiEdit /></Link>
                <button className='text-[#D98855]' onClick={() => updateDelete(_id)}><MdDelete />
                </button>
          </th>
        </tr>
    );
};

export default MyAddCard;