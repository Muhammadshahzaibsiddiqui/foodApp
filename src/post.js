import React, { Component } from 'react';
import Posts from './components/postController';


class Post extends Component {
    constructor() {
        super()
        this.state = {
          content: {
            appName:'Facebook Post Library', 
            createdBy: "Muhammad Shahzaib Siddiqui",
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWgqyX86I_SHet3cjuPKEfjlmAWjlky9qEMQpzTiiJGpQKS18S',
            description: "I'm feeling good today!",
            images: ['https://media.npr.org/assets/img/2018/12/24/bambi_wide-1bddd406ff521f9fe8318132708d0ba6d65b28b5-s800-c85.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgR64B9J75yD4SMxL63eaN3W3gK7XExHD3i8RjQv2ZQIw20tc2Mg'
        ],
            createdAt: Date.now(),
            likes: ['you'],
          }
        }
      }
    render() {
       
        return (
            <div>
                <Posts content={this.state.content } />
            </div>
        );
    }
}



export default Post;


