   
            var app = angular.module("CalculatorApp",[]);
            app.controller("CalcCtrl",CalcCtrl);
            
            function CalcCtrl(){
                
                this.plus = function(){
                                
                                this.operation = "+";
                                this.resultado = parseInt(this.A)+parseInt(this.B);
                                 
                                                                        
                            };

                this.minus = function(){
                                
                                this.operation = "-";
                                this.resultado = parseInt(this.A)-parseInt(this.B);
                            };
                this.times = function(){
                                
                                this.operation = "*";
                                this.resultado = parseInt(this.A)*parseInt(this.B);    
                             };
                this.div = function(){
                                
                                this.operation = "/";
                                this.resultado = parseInt(this.A)/parseInt(this.B);    
                            };
                this.equal = function(){
                                
                                    this.output = this.resultado;
                             };
                                
            }

