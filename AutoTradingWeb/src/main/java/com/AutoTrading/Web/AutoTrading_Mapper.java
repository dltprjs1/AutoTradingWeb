package com.AutoTrading.Web;

import java.util.ArrayList;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;

import com.AutoTrading.Web.DTO.AutoTrading_Balance_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_Condition_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_Condition_Details_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_ErrorChart_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_Error_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_Information_DTO;
import com.AutoTrading.Web.DTO.AutoTrading_TradesHistory_DTO;
import com.AutoTrading.Web.DTO.Test_DTO;

@Mapper
public interface AutoTrading_Mapper {
	ArrayList<AutoTrading_Condition_DTO> SelectCondition();
	
	ArrayList<AutoTrading_Balance_DTO> GetBalance();

	ArrayList<AutoTrading_Information_DTO> GetInformation();

	ArrayList<AutoTrading_TradesHistory_DTO> GetTradesHistory();

	ArrayList<AutoTrading_Error_DTO> GetError();

	List<AutoTrading_ErrorChart_DTO> GetErrorChartData();

	ArrayList<AutoTrading_TradesHistory_DTO> GetTradesHistoryPagination(int param1, int param2, int param3,String param4);

	ArrayList<AutoTrading_Condition_DTO> GetConditionPagination(int param1, int param2, int param3, String param4);

	ArrayList<AutoTrading_Error_DTO> GetErrorPagination(int param1, int param2, int param3, String param4);

	ArrayList<AutoTrading_Condition_Details_DTO> GetConditionDetails();
}
