import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyAddCard = ({card,inx}) => {
 console.log(card)
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
    const handleDelete = (id) =>{
     console.log(id)   
    }
    return (
            <tr>
            <th>
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
          <td>
                {presentLocation.substring(0,25)}
                <br />
            <span className="badge badge-ghost badge-sm">{email}</span>
          </td>
          <td>{like_count}</td>
          <th className='flex text-2xl items-center gap-3'>
                <Link to={`/updateData/${_id}`} className=""><CiEdit /></Link>
                <button onClick={() => handleDelete(_id)}><MdDelete />
                </button>
          </th>
        </tr>
    );
};

export default MyAddCard;