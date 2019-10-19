import React from 'react';
import './Toolbar.css';


class toolbar extends React.Component {
        constructor(props) {
            super(props)
        
            this.state={
                a:"a"
            }
        }

        alphabet = () => {
            this.setState({
                A: "A",
                B: "B",
                C: "C",
                D: "D",
                E: "E",
                F: "F",
                G: "G",
                H: "H",
                I: "I",
                J: "J",
                K: "K",
                L: "L",
                M: "M",
                N:"N",
                O:"O",
                P:"P",
                Q:"Q",
                R:"R",
                S:"S",
                T:"T",
                U:"U",
                V:"U",
                W:"W",
                X:"X",
                Y:"Y",
                Z:"Z"
        });
          }

          number=() =>{
              this.setState({
                A: "1",
                B: "2",
                C: "3",
                D: "4",
                E: "5",
                F: "6",
                G: "7",
                H: "8",
                I: "9",
                J: "10",
                K: "11",
                L: "12",
                M: "13",
                N:"14",
                O:"15",
                P:"16",
                Q:"17",
                R:"18",
                S:"19",
                T:"20",
                U:"21",
                V:"22",
                W:"23",
                X:"24",
                Y:"25",
                Z:"26"
              });
          }
        render() {
            return(
    <header className="toolbar">
        <nav className="toobar__navigation">
            <div></div>
            <div className="toolbar__logo"><a href="/">Home</a></div>
            <div className="toolbar__navigation_items">
            
            <div className="dropdown">
                <button className="dropbtn">Dropdown 
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#" onClick={this.alphabet}>A</a>
                    <a href="#" onClick={this.number}>B</a>
                </div>
                </div> 
                 <ul>
                
                <li><a href="/" onClick={ComingSoon}>Freqeuncy</a></li>
                <li><a href="/" onClick={ComingSoon}>Curreny</a></li>
                <li><a href="/" onClick={ComingSoon}>Analysis</a></li>
                <li><a href="/" onClick={ComingSoon}>Export</a></li>
                <li><a href="/"onClick={ComingSoon}>Help</a></li> 
                </ul>
            </div>
        </nav>
        <table className="tableName">
            <tr>
                <td>{this.state.A}</td>
            </tr>
            <tr>
                <td>{this.state.B}</td>
            </tr>
            <tr>
                <td>{this.state.C}</td>
            </tr>
            
            <tr>
                <td>{this.state.D}</td>
            </tr>
            
            <tr>
                <td>{this.state.E}</td>
            </tr>
            
            <tr>
                <td>{this.state.F}</td>
            </tr>
            
            <tr>
                <td>{this.state.G}</td>
            </tr>
            
            <tr>
                <td>{this.state.H}</td>
            </tr>
            
            <tr>
                <td>{this.state.I}</td>
            </tr>
            
            <tr>
                <td>{this.state.J}</td>
            </tr>
            
            <tr>
                <td>{this.state.K}</td>
            </tr>
            
            <tr>
                <td>{this.state.L}</td>
            </tr>
            
            <tr>
                <td>{this.state.M}</td>
            </tr>
            
            <tr>
                <td>{this.state.N}</td>
            </tr>
            
            <tr>
                <td>{this.state.O}</td>
            </tr>
            
            <tr>
                <td>{this.state.P}</td>
            </tr>
            
            <tr>
                <td>{this.state.Q}</td>
            </tr>
            
            <tr>
                <td>{this.state.R}</td>
            </tr>

            <tr>
                <td>{this.state.S}</td>
            </tr>

            <tr>
                <td>{this.state.T}</td>
            </tr>
            <tr>
                <td>{this.state.U}</td>
            </tr>
            <tr>
                <td>{this.state.V}</td>
            </tr>
            
            <tr>
                <td>{this.state.W}</td>
            </tr>
            <tr>
                <td>{this.state.Y}</td>
            </tr>

            <tr>
                <td>{this.state.Z}</td>
            </tr>
            </table>
    </header>
    )

            }
        
    }
    




function ComingSoon() {
    alert("Coming Soon");
  }


function number(){
    alert("123");
}
  
  

export default toolbar;
