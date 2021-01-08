<?php
class RestServices {
  public $imageBaseurl;  

  function __construct() {        
    $this->restServiceurl = 'http://localhost:2082/api/v1/';
  }

  /**
   * @DESC : Get Product List
   * @Params:string/Int
   * @return :array/json
   */
  public function getItemList() {
      try{
        $endPoint = 'price/list';
        return $this->getServices($endPoint);        
      }catch(Exception $ex){
          $error = ["status"=>false,"Error"=>$ex->getMessage];
          return json_encode($error);
      }    
  }

  private function getServices($endPoint){
    $ch_new = curl_init();
    curl_setopt($ch_new, CURLOPT_URL, $this->restServiceurl.$endPoint);
    curl_setopt($ch_new, CURLOPT_RETURNTRANSFER, 1);                        
    curl_setopt($ch_new, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch_new, CURLOPT_SSL_VERIFYHOST, 0);            
    $CurlResponse = curl_exec($ch_new);
    $Responsedata = json_decode($CurlResponse, true); 
    curl_close($ch_new);  
    return $Responsedata;
  }
}
