import React from 'react';
import './Materjal.css';

export default () => {
    return (
        <main style={{marginTop: '63px'}}>
            <div className="content" style={{minHeight: '100%'}}>
                <h1>Materjalid</h1>
                <table className="tabelikene">
                    <tbody>
                    <tr className="even">
                        <th>Link</th>
                        <th>Sisu</th>
                    </tr>
                    <tr className="odd">
                        <td><a href="https://scrimba.com/g/glearnreact" target="_blank"  rel="noopener noreferrer">Õpetus
                            1</a></td>
                        <td>Tasuta kursus algajatele</td>
                    </tr>
                    <tr className="even">
                        <td><a
                            href="https://www.codecademy.com/learn/react-101" target="_blank"  rel="noopener noreferrer">Õpetus
                            2</a></td>
                        <td>7 Tunnine kursus algajatele</td>
                    </tr>
                    <tr className="odd">
                        <td><a
                            href="https://www.youtube.com/watch?v=DLX62G4lc44" target="_blank"  rel="noopener noreferrer">Õpetus
                            3</a></td>
                        <td>5 Tunnine kursus algajatele</td>
                    </tr>
                    <tr className="even">
                        <td><a
                            href="https://www.youtube.com/watch?v=ZGOaCxX8HIU" target="_blank" rel="noopener noreferrer">Õpetus
                            4</a></td>
                        <td>Kuidas ehitada mängu Tetris Reactiga</td>
                    </tr>
                    <tr className="odd">
                        <td><a
                            href="https://www.youtube.com/watch?v=ZcD5rJKm3Lk" target="_blank" rel="noopener noreferrer">Õpetus
                            5</a></td>
                        <td>Kuidas teha To Do listi Reactis</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}