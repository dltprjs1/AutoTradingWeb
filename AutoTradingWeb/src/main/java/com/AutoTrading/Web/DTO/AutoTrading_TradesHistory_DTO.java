package com.AutoTrading.Web.DTO;

import lombok.*;

@Getter
public class AutoTrading_TradesHistory_DTO {
	public String DATE;
	public String TIME;
	public String NAME;
	public String ENTRYPRICE;
	public String SOLDPRICE;
	public String QUANTITY;
	public String POSITION;
	public String PERCENTAGE;
	public String COST;
	public String PROFITANDLOSS;
	public String FEE;
	public int TotalPages;
}
