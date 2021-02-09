import React from 'react'
import './style.scss'
import {Images} from '../../utils/Images'

import NavbarCompoent from '../../components/User/Navbar/Index'
import FooterCompoent from '../../components/User/Footer/Index'

const Index = () => {
    return (
        <div className="about">
            <NavbarCompoent />

            {/* Header Banner */}
            <div className="header py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 content d-none d-lg-block">
                            <h1>About <span>iDoctor</span></h1>
                        </div>
                        <div className="col-12 col-lg-6 image-column text-center d-none d-lg-block">
                            <img src={Images.About} alt="..." />
                        </div>
                        <div className="col-12 col-lg-6 content d-lg-none text-center">
                            <h1>About <span>iDoctor</span></h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>iDoctor</h3>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is </p>
                            <p>
                                dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                            </p>
                            <p>
                                dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <FooterCompoent />
        </div>
    );
};

export default Index;