package com.AutoTrading.Web;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AutoTrading.Web.DTO.AutoTrading_Balance_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_Condition_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_Condition_Details_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_ErrorChart_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_Error_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_Information_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_TradesHistory_DTO;
import com.AutoTrading.Web.DTO.Test_DTO;

@Service
public class AutoTrading_Service{

	@Autowired
	private AutoTrading_Mapper autoTrading;

	public ArrayList<AutoTrading_Condition_DTO> SelectCondition() { 
		return autoTrading.SelectCondition();
	}
	
	public ArrayList<AutoTrading_Balance_DTO> GetBalance() { 
		return autoTrading.GetBalance();
	}

	public ArrayList<AutoTrading_Information_DTO> GetInformation() {	
		return autoTrading.GetInformation();
	}

	public ArrayList<AutoTrading_TradesHistory_DTO> GetTradesHistory() {
		return autoTrading.GetTradesHistory();
	}

	public ArrayList<AutoTrading_Error_DTO> GetError() {
		return autoTrading.GetError();
	}
		
	public List<AutoTrading_ErrorChart_DTO> GetErrorCharData() {
		return autoTrading.GetErrorChartData();
	}
	
	public ArrayList<AutoTrading_TradesHistory_DTO> GetTradesHistoryPagination(int param1, int param2, int param3, String param4) {
        return autoTrading.GetTradesHistoryPagination(param1, param2, param3, param4);
    }
	
	public ArrayList<AutoTrading_Condition_DTO> GetConditionPagination(int param1, int param2, int param3, String param4) {
		return autoTrading.GetConditionPagination(param1, param2, param3, param4);
	}
	
	public ArrayList<AutoTrading_Error_DTO> GetErrorPagination(int param1, int param2, int param3, String param4) {
        return autoTrading.GetErrorPagination(param1, param2, param3, param4);
    }

	public ArrayList<AutoTrading_Condition_Details_DTO> GetConditionDetails() {
		return autoTrading.GetConditionDetails();
	}

	
	

  
}
