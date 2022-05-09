import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    
    state = { emotionList:[] }
    
    constructor(props){
        console.log(props);
        super(props);
    }
    
    parseEmotion(){
        /*Write code to use the .map method that you worked on in the 
                    Hands-on React lab to extract the emotions. If you are stuck,
                    please click the instructions to see how to implement a map*/
        let emotionsArr= Object.entries(this.props.emotions);
        console.log(emotionsArr);
        return "<tr><td>Under construction</td></tr>";
    }
    
    componentDidMount() {
        let emotionsArr= Object.entries(this.props.emotions);
        console.log(emotionsArr);
        let emotionFormat= emotionsArr.map((emotion)=>{
            return (
                    <tr>
                        <td>{emotion[0]}</td>
                        <td>{emotion[1]}</td>
                    </tr>
            );
        });
        this.setState({emotionList:emotionFormat})
    }
    
    render() {        
        console.log("render emotion table");
        let emotion= this.parseEmotion();
        //Returns the emotions as an HTML table
        return (  
            <div>
                <table className="table table-bordered">
                    <tbody>
                        {this.state.emotionList}
                    </tbody>
                </table>
            </div>
        );
    }
    
}
export default EmotionTable;