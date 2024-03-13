package com.AutoTrading.Web.DTO;

import lombok.*;

@Getter
public class AutoTrading_Error_DTO {
	public String DATE;
	public String TIME;
	public String ERROR_TITLE;
	public String ERROR_CONTENTS;
	public int TotalPages;
}
