import Thumbnail from './Thumbnail'


const Results = ({ results }) => {
  return (
    <div>
        {results.map(result =>(
            <Thumbnail  key={results.id} results={result}/>
        ))}
    </div>
  )
}

export default Results