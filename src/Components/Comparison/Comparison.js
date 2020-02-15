import React, { Component } from 'react';
import TopMenu from '../TopMenu/TopMenu';
import './Comparison.css';
import Stepper from 'bs-stepper';
import Level1 from './Level1/Level1'

class Comparison extends Component {
    componentDidMount() {
        this.stepper = new Stepper(document.querySelector('#stepper2'), {
          linear: false,
          animation: true
        })
      }
    
      onSubmit(e) {
        e.preventDefault()
      }
    
      render() {
        return (
          <div className="comparison_stepper">
            <TopMenu/>
            <div className="comparison_stepper_content">
                <div id="stepper2" class="bs-stepper">
                <div class="bs-stepper-header tp_stepper_header">
                    <div class="step" data-target="#test-l-1">
                    <button class="step-trigger" style={{maxWidth:"100px"}}>
                        <span class="comparison-stepper-circle1">1</span>
                        <span class="bs-stepper-label">انتخاب</span>
                    </button>
                    </div>
                    <div class="line1"></div>
                    <div class="step" data-target="#test-l-2">
                    <button class="step-trigger"  style={{maxWidth:"90px"}}>
                        <span class="comparison-stepper-circle1">2</span>
                        <span class="bs-stepper-label">مشحصات</span>
                    </button>
                    </div>
                    <div class="line1"></div>
                    <div class="step" data-target="#test-l-3">
                    <button class="step-trigger"  style={{maxWidth:"90px"}}>
                        <span class="comparison-stepper-circle1">3</span>
                        <span class="bs-stepper-label">ارسال</span>
                    </button>
                    </div>
                    <div class="line1"></div>
                    <div class="step" data-target="#test-l-4">
                    <button class="step-trigger"  style={{maxWidth:"90px"}}>
                        <span class="comparison-stepper-circle1">4</span>
                        <span class="bs-stepper-label">پرداخت</span>
                    </button>
                    </div>
                </div>
                
                <div class="bs-stepper-content">
                    <form onSubmit={this.onSubmit}>
                    <div id="test-l-1" class="content">
                        <div class="form-group">
                            <Level1/>
                        </div>
                    </div>
                    <div id="test-l-2" class="content">
                        <div class="form-group">
                        
                        </div>
                    </div>
                    <div id="test-l-3" class="content text-center">
        
                    </div>
                    <div id="test-l-4" class="content">
                        <div class="form-group">
    
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
          </div>
        );
      }
    }
export default Comparison;