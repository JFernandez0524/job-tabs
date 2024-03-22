import { useState, useEffect } from 'react';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const jobs = await res.json();
        console.log(jobs);
        setJobs(jobs);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h2 className='loading'>Loading...</h2>;
  }

  return (
    <main className='jobs-center'>
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />

      <JobInfo jobs={jobs} currentItem={currentItem} />
    </main>
  );
};
export default App;
