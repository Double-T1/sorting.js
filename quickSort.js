//quick sort
//recursion
//time: O(nlogn)
//space: O(nlogn)
var quickSort = function(nums) {
    if (nums.length <=1) return nums
    let left = []
    let right = []
    let pivotNum = nums[0]
    for (let i=1; i<nums.length; i++) {
        if (nums[i]>pivotNum) {
            right.push(nums[i])
        } else if (nums[i]<pivotNum) {
            left.push(nums[i])
        }
    }
    return [...quickSort(left),pivotNum,...quickSort(right)]
};

//Lomuto partition scheme: choosing the last index as the pivot
//time: O(nlogn)
//space: O(logn) t0 O(n)
let quickSort2 = (nums) => {
    recur(nums)
    return nums
}

let recur = (nums,start=0,end=nums.length-1) => {
    if (start >= end) {
        return 
    } else {
        let index = partitionLomuto(nums,start,end)
        recur(nums,start,index-1)
        recur(nums,index+1,end)
        return
    }
}

let partitionLomuto = (arr,start,end) => {
    let swap = (arr,i,j) => {
        let temp = arr[i] 
        arr[i] = arr[j]
        arr[j] = temp
        return    
    }

    let pivotNum = arr[end]
    let startOfBigger = start //is always the first element that is greater than pivotNum) 
    for (let i=start; i<end; i++) {
        if (arr[i]<pivotNum) {
            swap(arr,i,startOfBigger)
            startOfBigger++
        }
    }

    swap(arr,end,startOfBigger)
    return startOfBigger
}


//Hoare scheme: we set the mid as the pivot
let quickSort3 = (nums) => {
    recur3(nums)
    return nums
}

let recur3 = (nums,left=0,right=nums.length-1) => {
    if (left>=right) {
        return
    } else {
        let index = partition(nums,left,right)
        recur3(nums,left,index-1)
        recur3(nums,index+1,right)
        return
    }
}

let partitionHoare = (arr,left,right) => {
    let swap = (arr,i,j) => {
        let temp = arr[i] 
        arr[i] = arr[j]
        arr[j] = temp
        return    
    }

    let mid = left + Math.floor((right-left)/2)
    let pivotNum = arr[mid]
    while (left<right) {
        while(arr[left]<pivotNum) {
            left++
        }

        while(arr[right]>pivotNum) {
            right--
        }

        swap(arr,left,right)
    }
    return left
}

function partition(arr, left, right) {
    let swap = (arr,i,j) => {
        let temp = arr[i] 
        arr[i] = arr[j]
        arr[j] = temp
        return    
    }
    left = left--
    right = right++
    const pivot = arr[Math.floor((left+right)/2)];
    while (true) {
        do {
            left++
        } while (arr[left] < pivot)

        do {
            right--
        } while (arr[right]>pivot)
  
        if (left >= right) {
            return right;
        }
  
        swap(arr, left, right);
    }
}
let arr =[5,1,1,2,0,0]
console.log(quickSort3(arr))
