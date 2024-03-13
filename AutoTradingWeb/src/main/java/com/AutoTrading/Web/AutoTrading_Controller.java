package com.AutoTrading.Web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.AutoTrading.Web.DTO.AutoTrading_Balance_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_Condition_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_Condition_Details_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_ErrorChart_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_Error_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_Information_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_TradesHistory_DTO;

import java.util.List;

@Controller
public class AutoTrading_Controller {

    @Autowired
    private AutoTrading_Service autoTradingService;

    @GetMapping("/GetCondition")
    public ResponseEntity<List<AutoTrading_Condition_DTO>> GetCondition() {
        List<AutoTrading_Condition_DTO> Condition = autoTradingService.SelectCondition();
        return ResponseEntity.ok().body(Condition);
    }
    
    @GetMapping("/GetBalance")
    public ResponseEntity<List<AutoTrading_Balance_DTO>> GetBalance() {
        List<AutoTrading_Balance_DTO> Balance = autoTradingService.GetBalance();
        return ResponseEntity.ok().body(Balance);
    }
    
    @GetMapping("/GetTodayInformation")
    public ResponseEntity<List<AutoTrading_Information_DTO>> GetInformation() {
        List<AutoTrading_Information_DTO> Information = autoTradingService.GetInformation();
        return ResponseEntity.ok().body(Information);
    }
    
    @GetMapping("/GetTodayError")
    public ResponseEntity<List<AutoTrading_ErrorChart_DTO>> GetTodayError() {
        List<AutoTrading_ErrorChart_DTO> Information = autoTradingService.GetErrorCharData();
        return ResponseEntity.ok().body(Information);
    }
    
    @GetMapping("/GetTradesHistory")
    public ResponseEntity<List<AutoTrading_TradesHistory_DTO>> GetTradesHistoryPagination(@RequestParam(name = "param1") int param1,@RequestParam(name = "param2") int param2,@RequestParam(name = "param3") int param3,@RequestParam(name = "param4") String param4) {
        List<AutoTrading_TradesHistory_DTO> TradesHistory = autoTradingService.GetTradesHistoryPagination(param1, param2, param3, param4);
        return ResponseEntity.ok().body(TradesHistory);
    }
        
    @GetMapping("/GetOrderCondition")
    public ResponseEntity<List<AutoTrading_Condition_DTO>> GetOrderConditionPagination(@RequestParam(name = "param1") int param1,@RequestParam(name = "param2") int param2,@RequestParam(name = "param3") int param3,@RequestParam(name = "param4") String param4) {
        List<AutoTrading_Condition_DTO> Condition = autoTradingService.GetConditionPagination(param1, param2, param3, param4);
        return ResponseEntity.ok().body(Condition);
    }
    
    @GetMapping("/GetError")
    public ResponseEntity<List<AutoTrading_Error_DTO>> GetErrorPagination(@RequestParam(name = "param1") int param1,@RequestParam(name = "param2") int param2,@RequestParam(name = "param3") int param3,@RequestParam(name = "param4") String param4) {
        List<AutoTrading_Error_DTO> Error = autoTradingService.GetErrorPagination(param1, param2, param3, param4);
        return ResponseEntity.ok().body(Error);
    }
    
    @GetMapping("/GetConditionDetails")
    public ResponseEntity<List<AutoTrading_Condition_Details_DTO>> GetConditionDetails() {
        List<AutoTrading_Condition_Details_DTO> Condition_Details = autoTradingService.GetConditionDetails();
        return ResponseEntity.ok().body(Condition_Details);
    }    
    
    @GetMapping("/index")
    public String GetTradesHistory(Model model) {
        List<AutoTrading_TradesHistory_DTO> TradesHistory = autoTradingService.GetTradesHistory();
        model.addAttribute("TradesHistory", TradesHistory);
        return "index";
    }
    
    @GetMapping("/chart")
    public String Movechart() {
    	return "charts"; 
    }
    
    @GetMapping("/table")
    public String MoveTable() {
    	return "tables"; 
    }
        
    @GetMapping("/ErrorTable")
    public String MoveTableError() {
    	return "tables"; 
    }
    
}
