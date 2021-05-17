import React from 'react'

const InfoSidebar = () => {
    const SampleSP = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    author: ['Jane Doe', 'Juan Dela Cruz', 'Lorem Ipsum'],
    abstract: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
    adviser: 'Maria Art Antonette Clarino',
    yearpublished: '1969',
    uploaddate: '01/04/2021',
    relatedcourses: ['CMSC191'],
    format: 'Journal',
    subject: 'Agriculture'  }

    return(
        <div className = "infosidebardiv">
            <table id = "spttableinfo">
                <br/>
                <tr >
                    <th className = "spt-thtr">Format</th>
                    <td className = "spt-thtr">{SampleSP.format}</td>
                </tr>

                <tr>
                    <th className = "spt-thtr">Adviser</th>
                    <td className = "spt-thtr">{SampleSP.adviser}</td>
                </tr>

                <tr>
                    <th className = "spt-thtr">Course(s)</th>
                    <td className = "spt-thtr">{SampleSP.relatedcourses}</td>
                </tr>

                <tr>
                    <th className = "spt-thtr">Subject(s)</th>
                    <td className = "spt-thtr">{SampleSP.subject}</td>
                </tr>
            </table>

            <div className = "sptviewbuttons">
                <button id = "viewposter">
                    <i className="fas fa-file-image"></i>
                    View Poster
                </button>

                <button id = "downloadjournal">
                    Download Journal
                </button>

                <button id = "downloadsourcecode">
                    Download Source Code
                </button>
            </div>

        </div>
    );
}

export default InfoSidebar;