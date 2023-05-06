import './sub.css';
import React, { Component } from "react";

export class audiosub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      audiobooks: [],
      modalTitle: "",
      AudioBooksId: 0,
      AudioBooksName: "",
      AudioBooksAuthor: "",
      publishDate: "",
      PhotoFileName: "anonymous.png",
      PhotoPath: "",
      Genre: "",
      BookNameFilter: "",
    };
  }

  // Filter function
  FilterFn() {
    const { BookNameFilter, booksWithoutFilter } = this.state;
  
    const filteredData = booksWithoutFilter.filter((el) =>
      el.AudioBooksName &&
      el.AudioBooksName
        .toString()
        .toLowerCase()
        .includes(BookNameFilter && BookNameFilter.toString().trim().toLowerCase())
    );
  
    this.setState({ audiobooks: filteredData });
  }
  
  // Sort function
  sortResult(prop, asc) {
    const { booksWithoutFilter } = this.state;

    const sortedData = booksWithoutFilter.sort((a, b) => {
      if (asc) {
        return a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0;
      } else {
        return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
      }
    });

    this.setState({ audiobooks: sortedData });
  }

  // Fetch data from API
//   refreshList() {
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ audiobooks: data, booksWithoutFilter: data });
//       });
//   }

refreshList() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
        const audiobooks = data.map((book) => ({
          id: book.id,
          title: book.title,
          artist: book.author,
          url: 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3', // replace with URL to audio file
        }));
        this.setState({ audiobooks, booksWithoutFilter: audiobooks });
      });
  }
  

  componentDidMount() {
    this.refreshList();
  }

  // Handle search bar input
  changeBookNameFilter = (e) => {
    this.setState({ BookNameFilter: e.target.value }, () => {
      this.FilterFn();
    });
  };

  render() {
    const { audiobooks } = this.state;
    
    return (
      <div className="container">
        <div className="row justify-content-center mt-5 mb-3">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <input
              className="form-control"
              onChange={this.changeBookNameFilter}
              placeholder="Search by book name..."
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            {audiobooks.length > 0 && (
              <>
                {audiobooks.slice(0, 5).map((bk) => (
                  <div key={bk.id} className="card mb-3">
                    <div className="card-body">
                      <audio controls>
                        <source src={bk.url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                      <p className="card-text mt-2">
                        {bk.title} - by: {bk.artist}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}
