import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
    return (
        <div className='videoFooter'>
            <div className='videoFooter-text'>
                <h3>@{name}</h3>
                <p>{description}</p>
                <div className='videoFooter-music'>
                    <MusicNoteIcon className='VideoFooter-icon'/>
                    <div className="videoFooterMusic-text">
                        <p>{music}</p>
                    
                    </div>
                </div>
            </div>
            <img className='videoFooter-record' alt="Imagem de um vinil girando"
            src='https://cdn.discordapp.com/attachments/1090790629765824512/1091132023193739424/music-long-play.png'/>
        </div>
    )
}

export default VideoFooter