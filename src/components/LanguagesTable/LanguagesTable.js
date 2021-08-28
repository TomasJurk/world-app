import React from 'react';
import styles from './LanguagesTable.module.css';
import LanguagesTableRow from './LanguagesTableRow/LanguagesTableRow';

const LanguagesTable = ({ languages }) => {
    
    const languageRows = Object.keys(languages).map((lang, i) => (
        <LanguagesTableRow 
            key={Math.random() + i}
            name={languages[lang].name}
            countries={languages[lang].countries}
            totalSpeakers={languages[lang].totalSpeakers} />
    ));

    return (
      <section className={styles.LanguagesList}>
        <header>
            <h2>World languages list</h2>
        </header>
        <div className={styles.TableWrapper}>
          <table className={styles.LanguagesTable}>
            <thead>
              <tr>
                <th>Language</th>
                <th>Countries</th>
                <th>Aprx. speaking population (mil)</th>
              </tr>
            </thead>
            <tbody>
                {languageRows}
            </tbody>
          </table>
        </div>
      </section>
    );
}

export default LanguagesTable;