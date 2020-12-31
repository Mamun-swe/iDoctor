import React from 'react'
import Icon from 'react-icons-kit'
import './style.scss'
import { ic_archive } from 'react-icons-kit/md'

const Index = ({ files }) => {

    return (
        <div className="right-menu-container">
            { files && files.length > 0 ?
                files && files.map((file, i) =>
                    <div className="file-container" key={i}>
                        <div className="file-body border">
                            <div className="flex-center flex-column">
                                <Icon icon={ic_archive} size={30} style={{ color: '#dfdfdf' }} />
                            </div>
                        </div>
                    </div>
                ) : null}
        </div>
    );
};

export default Index;